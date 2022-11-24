const { useEffect } = require("react")
const useTitle = title => {
   useEffect(()=> {
       document.title = `${title} - Offer Up`;
   }, [title])
}
 
export default useTitle ;