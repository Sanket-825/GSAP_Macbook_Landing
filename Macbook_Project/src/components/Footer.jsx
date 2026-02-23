import { footerLinks } from "../constants"

const Footer = () => {
  const base = import.meta.env.BASE_URL
  return (
    <footer>
      <div className="info">
        <p>More ways to shop: <a href="https://www.apple.com/in/retail" className="text-blue-500 underline" target="_blank">Find an Apple Store</a> or <a href="https://locate.apple.com" className="text-blue-500 underline" target="_blank">other retailer </a> near you. Or call 000800 040 1966</p>
        <img src={`${base}logo.svg`} alt="Apple Logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2026 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({label, link})=>(
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer