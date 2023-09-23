import React,{useRef} from 'react'

const UserefForm = () => {
    const name = useRef();   
    const email = useRef();
    const password = useRef();
    const tel = useRef();

    const display = (e) => {
        e.preventDefault(); //button click cheyyunnathin munne call avathe erikkan
        const a = name.current.value; //to access the dom element or values associated with the ref
        const b = email.current.value;
        const c = password.current.value;
        const d = tel.current.value;

        // const data={a,b,c,d};
        // console.log(data);
        console.log(a);
        // console.log(b);
        // console.log(c);
        // console.log(d);
    };
       
  return (
    <div>
        <form action="" onSubmit={display}>
        <input type="text" placeholder="name" ref={name} />
        <input type="text" placeholder="email" ref={email} />
        <input type="password" placeholder="password" ref={password} />
        <input type="text" placeholder="number" ref={tel} />
        <input type="submit" />
      </form>

    </div>
  );
};


export default UserefForm;