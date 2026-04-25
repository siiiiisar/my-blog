import sanitizeHtml, { type IOptions } from 'sanitize-html';

const sharedAttributes = ['class', 'id', 'data-*'];

const sanitizeOptions: IOptions = {
	allowedTags: sanitizeHtml.defaults.allowedTags.concat(['details', 'summary', 'img']),
	allowedAttributes: {
		...sanitizeHtml.defaults.allowedAttributes,
		'*': sharedAttributes,
		a: [...(sanitizeHtml.defaults.allowedAttributes.a ?? []), 'rel'],
		blockquote: [...sharedAttributes, 'cite'],
		ol: [...sharedAttributes, 'start', 'reversed', 'type'],
		td: [...sharedAttributes, 'colspan', 'rowspan'],
		th: [...sharedAttributes, 'colspan', 'rowspan', 'scope']
	}
};

export const sanitizeArticleHtml = (rawHtml: string): string => {
	return sanitizeHtml(rawHtml, sanitizeOptions);
};
