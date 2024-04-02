/* global CMS */

CMS.registerEditorComponent({
  id: 'button',
  label: 'Button',
  fields: [
    { name: 'inner', label: 'Text', widget: 'string' },
    { name: 'href', label: 'Link', widget: 'string' },
    { name: 'target', label: 'Target', widget: 'string' },
    { name: 'extraClass', label: 'Class', widget: 'string' },
  ],
  pattern: /^{{< button href="(.*)" target="(.*)" extraClass="(.*)" >}}(.*){{< \/button >}}/,
  fromBlock (match) {
    return {
      href: match[1],
      target: match[2],
      extraClass: match[3],
      inner: match[4],
    }
  },
  toBlock (obj) {
    return `{{< button href="${obj.href}" target="${obj.target}" extraClass="${obj.extraClass}" >}}${obj.inner}{{< /button >}}`
  },

  /*
   * example code if you have editor previews
   */

  // toPreview (obj) {
  //   return (
  //     `<a href="${obj.href}" target="${obj.target}" class="button ${obj.extraClass}">${obj.inner}</a>`
  //   )
  // },
})
