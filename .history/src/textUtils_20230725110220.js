// textUtils.js
export const convertIdentifiersToTags = (text) => {
    return text.replace(/#TAG([^#]+)#/g, (match, tag) => `{${tag}}`);
  };
  