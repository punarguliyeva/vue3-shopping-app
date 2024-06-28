export function setLangToLocal(str) {
  localStorage.setItem('lang', str)
}

export function getLangFromLocal() {
  const str = localStorage.getItem('lang')
  return str
}
