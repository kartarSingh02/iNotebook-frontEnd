import React from 'react'

function Alert(props) {

    // we want to capitalize the first alphabet of the type of alert 
    const capitalize = (word) => {
      if(word === "danger"){
        word = "error";
      }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    // here this means if there is any props passed that is not null then only the div will work else not
    <div style= {{ height: '60px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
        }
        </div>
  )
}
export default Alert