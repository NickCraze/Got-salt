const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.focus();
  }
});
const products = {
  fine: { title: 'Fine salt', number: '01', options: 'Iodised & uniodised', description: 'A fine-grain option for customers who need a smaller crystal size. Discuss your application and specification with our sales team.' },
  medium: { title: 'Medium salt', number: '02', options: 'Iodised & uniodised', description: 'A medium-grain option within our salt range. Our team can help you discuss crystal size, packaging and supply requirements.' },
  coarse: { title: 'Coarse salt', number: '03', options: 'Iodised & uniodised', description: 'A larger crystal size for customers specifying coarse salt. Share your intended application so we can discuss a suitable supply option.' },
  bakers: { title: 'Superfine / bakers salt', number: '04', options: 'Confirm your specification with our team', description: 'Our superfine and bakers salt range offers a finer texture. Enquire about the product specification and packaging for your production needs.' }
};
const tabs = [...document.querySelectorAll('[data-product]')];
let selectedProduct = 'Fine salt';
function selectProduct(tab, focus = false) {
  const product = products[tab.dataset.product];
  tabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; });
  document.querySelector('#product-panel').setAttribute('aria-labelledby', tab.id);
  document.querySelector('#product-title').textContent = product.title;
  document.querySelector('#product-description').textContent = product.description;
  document.querySelector('#product-options').textContent = product.options;
  document.querySelector('.product-number').textContent = `GRADE / ${product.number}`;
  document.querySelector('#product-enquiry').textContent = `Enquire about ${product.title.toLowerCase()}`;
  selectedProduct = product.title;
  if (focus) tab.focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectProduct(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (i + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectProduct(tabs[next], true); }
  });
});
document.querySelector('#product-enquiry').addEventListener('click', () => {
  document.querySelector('#topic').value = 'Salt supply';
  if (!document.querySelector('#message').value) document.querySelector('#message').value = `I would like to enquire about ${selectedProduct.toLowerCase()}.\nQuantity: \nPack size: \nDelivery location: `;
});
document.querySelectorAll('[data-topic]').forEach(link => link.addEventListener('click', () => { document.querySelector('#topic').value = link.dataset.topic; }));
document.querySelector('#enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const topic = data.get('topic');
  const recipient = /partnership/.test(topic.toLowerCase()) ? 'gary@got-holdings.co.za' : 'marcia@got-holdings.co.za';
  const body = `Name: ${data.get('name')}\nCompany: ${data.get('company') || 'Not provided'}\nEmail: ${data.get('email')}\nInterest: ${topic}\n\n${data.get('message')}`;
  const href = `mailto:${recipient}?subject=${encodeURIComponent(`GOT Holdings enquiry: ${topic}`)}&body=${encodeURIComponent(body)}`;
  const status = document.querySelector('#form-status');
  status.replaceChildren(document.createTextNode('Your email draft is ready. If your email app did not open, '));
  const retry = document.createElement('a'); retry.href = href; retry.textContent = 'open it here'; status.append(retry, document.createTextNode(` or email ${recipient}. Your enquiry is sent only when you send the email.`)); status.hidden = false;
  window.location.href = href;
});
document.querySelector('#year').textContent = new Date().getFullYear();
