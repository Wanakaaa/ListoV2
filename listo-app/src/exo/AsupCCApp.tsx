import AsupFormHandler from "./AsupFormHandler"
import Pound from "./AsupPound"
import USD from "./AsupUSD"

const AsupCCApp = () => {
  return (
    <>
      <AsupFormHandler
        render={
          (amount) => {
            return (
              <>
              <USD amount={amount}></USD>
              <Pound amount={amount}></Pound>
              </>
            )
          }
        }
      >
      </AsupFormHandler>
    </>
  )
}

  export default AsupCCApp


/* 
import FormHandler from "./FormHandler"

const Trash = () => {
  return (
    <>
      <FormHandler
      url="studytonight.com/submitForm"
        render = {
          ({formData, error, handleChange, handleSubmit}) => {
            return (
              <form onSubmit={handleSubmit}>
                  <input type="text" name="username" placeholder="username" onChange={handleChange}/>
                  <input type="password" name="password" placeholder="enter password" onChange={handleChange}/>
                  <button type="submit">Submit Form</button>
                  <div>{error.msg && error.msg}</div>
              </form>
            )
          }
        }
        />
    </>
  )
}

  export default Trash
*/