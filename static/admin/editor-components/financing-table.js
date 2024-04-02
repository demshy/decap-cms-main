/* global CMS */

CMS.registerEditorComponent({
  id: 'financingTable',
  label: 'Financing Table',
  widget: 'object',
  fields: [{
    name: 'title',
    widget: 'string',
    required: false,
  }, {
    name: 'description',
    widget: 'text',
    required: false,
  }, {
    name: 'tableHeaderLeft',
    label: 'table header left',
    hint: 'If empty, table will not be displayed',
    widget: 'string',
    required: false,
  }, {
    name: 'tableHeaderRight',
    label: 'table header right',
    widget: 'string',
    required: false,
  }, {
    name: 'tableRows',
    label: 'table rows',
    widget: 'list',
    fields: [
      { name: 'left', label: 'Column left', widget: 'string' },
      { name: 'right', label: 'Column right', widget: 'string' },
    ],
  }, {
    name: 'disclaimer',
    widget: 'string',
    required: false,
  }, {
    name: 'button',
    widget: 'object',
    fields: [
      { name: 'text', widget: 'string', hint: 'If empty, button will not be displayed', required: false },
      { name: 'href', widget: 'string', required: false },
    ],
  }],
  pattern: /^{{< financing-table >}}(.*?){{< \/financing-table >}}/ms,
  fromBlock (match) {
    return JSON.parse(match[1] || '')
  },
  toBlock (obj) {
    return `{{< financing-table >}}${JSON.stringify(obj)}{{< /financing-table >}}`
  },
})
