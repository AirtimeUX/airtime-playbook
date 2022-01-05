var script = document.createElement("script");
script.src = "https://apiv2.popupsmart.com/api/Bundle/377681"
script.async = true;
document.head.appendChild(script);

document.addEventListener('keydown', (e) => {
  const id = e.target.id;
  if (id && id.slice(0,11) === 'popup-smart') e.stopPropagation();
});



