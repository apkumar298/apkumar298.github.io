

import { useState } from 'React';

const [buttonText, setButtonText] = useState("Next"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

const changeText = (text) => setButtonText(text);

return (
  <Button onClick={() => changeText("newText")}>{buttonText}</Button>
)