import { useRef, useState, useEffect } from 'react'
import { useLanguage } from '../services/translation'
import { sendEmail } from '../services/email'
import '../styles/contacts.css'

const EmailForm = () => {
  const { t } = useLanguage()
  const formRef = useRef()
  // estados para controlar mensagens de sucesso/erro
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(null)

  // limpa mensagens de sucesso/erro após 5 segundos
  useEffect(() => {
    if (enviado || error) {
      const timer = setTimeout(() => {
        setEnviado(false)
        setError(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [enviado, error])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    sendEmail(formRef)
      .then(() => {
        setEnviado(true)
        formRef.current.reset()
      })
      .catch((err) => {
        console.error('Email send failed', err)
        setError('Erro ao enviar mensagem')
      })
  }

  return (
    <form ref={formRef} className="envio-email" onSubmit={handleSubmit}>
      <h2>{t('entre-em-contato') }</h2>
      <p>{t('contato-descricao')}</p>

      <label htmlFor="nome">{t('nome')}</label>
      <input type="text" id="nome" name="name" required />

      <label htmlFor="email">{t('email')}</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="mensagem">{t('mensagem')}</label>
      <textarea id="mensagem" name="message" required></textarea>

      <button type="submit">{t('enviar')}</button>

      {enviado && <p className="successo-mensagem">{t('mensagem-enviada')}</p>}
      {error && <p className="error-mensagem">{error}</p>}
    </form>
  )
}

export default EmailForm;
