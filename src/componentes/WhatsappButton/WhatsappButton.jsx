import "./WhatsappButton.css"
function WhatsappButton() {

  return (
    
      <a href="https://api.whatsapp.com/send?phone=3133331128" target="_blank"  rel="noreferrer"className="btnWsp">
        <img src="/icons/whatsapp.svg" alt="" className="svgWsp" />
      </a>
  )
}

export default WhatsappButton