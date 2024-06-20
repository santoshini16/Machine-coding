import {useState} from 'react'
const Folder = ({data})=>{
    const [expand,setExpand] = useState('flase');
    if(data.isFolder){
        return(
            <div>
                <span onClick={()=>setExpand(!expand)}>{data.name}</span>
                <br/>
                <div style={{display: expand ? 'none' : 'block', paddingLeft:15}}>
                {data.items && data.items.map((exp, index) => (
                   <Folder key={index} data={exp} />
                 ))}
                </div>
            </div>
            );
    }else{
        return <span>{data.name}<br/></span>
    }
   
}
export default Folder;