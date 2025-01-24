import { useState } from 'react'

type CCApp= {
  amount: number | string | undefined,
}

const AsupFormHandler = ({render}: CCApp) => {
  const [amount, setAmount] = useState<number | string | undefined>()

  const amountChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value) 

  return <>
    INR: 
    <input type="number" placeholder='Enter amount' onChange={amountChange}></input>
    <div>{render(amount)}</div>
  </>
}

export default AsupFormHandler

/*import { useState } from 'react'

type FormHandlerProps= {
  url: string,
  render: (props: { 
    formData: Record<string, any>
    error: Record<string, any>
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  }) => React.ReactNode
}

const FormHandler = ({url, render}: FormHandlerProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [error, setError] = useState<Record<string, any>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value, type} = e.target
     //Empty check
    if(value === '') {
      setError({msg: `${name} field required`})
    }

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let formData2 = new FormData(e.target as HTMLFormElement)
    let formDataObj = Object.fromEntries(formData2.entries())
    console.log(formDataObj)
    setFormData(formDataObj)
    console.log(formData)

  }

  return render({formData, error, handleChange, handleSubmit})
}

export default FormHandler */