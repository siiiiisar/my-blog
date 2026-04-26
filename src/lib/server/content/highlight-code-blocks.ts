import * as cheerio from 'cheerio';
import { codeToHtml } from 'shiki';

const SHIKI_THEME = 'github-dark';

const languageAliases: Record<string, string> = {
	plaintext: 'text',
	plain: 'text',
	text: 'text',
	txt: 'text',
	shell: 'bash',
	terminal: 'console',
	'shell-session': 'console',
	'shellscript-session': 'console',
	env: 'dotenv'
};

export async function highlightCodeBlocksInHtml(html: string): Promise<string> {
	const $ = cheerio.load(html, null, false);
	const preNodes = $('pre').toArray();

	if (preNodes.length === 0) {
		return html;
	}

	await Promise.all(
		preNodes.map(async (preNode) => {
			const preElement = $(preNode);
			const codeElement = preElement.children('code').first();

			if (codeElement.length === 0) {
				return;
			}

			const preClassNames = getClassNames(preElement.attr('class'));
			const codeClassNames = getClassNames(codeElement.attr('class'));
			const classNames = [...preClassNames, ...codeClassNames];
			const code = codeElement.text();
			const lang = resolveLanguage(classNames) ?? 'text';

			try {
				const highlighted = await codeToHtml(code, {
					lang,
					theme: SHIKI_THEME
				});

				preElement.replaceWith(highlighted);
			} catch {
				return;
			}
		})
	);

	return $.html();
}

function getClassNames(rawValue: string | undefined): string[] {
	return (rawValue ?? '')
		.split(/\s+/)
		.map((className) => className.trim())
		.filter(Boolean);
}

function resolveLanguage(classNames: string[]): string | null {
	for (const className of classNames) {
		const langPrefix = className.startsWith('language-')
			? 'language-'
			: className.startsWith('lang-')
				? 'lang-'
				: null;

		if (!langPrefix) {
			continue;
		}

		let langName = className.slice(langPrefix.length).toLowerCase();

		if (langName === 'diff') {
			return null;
		}

		if (langName.startsWith('diff-')) {
			langName = langName.slice(5);
		}

		return languageAliases[langName] ?? langName;
	}

	return null;
}
