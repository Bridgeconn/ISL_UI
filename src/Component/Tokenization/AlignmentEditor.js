import React,{useState} from "react";
import styles from "../../Stylesheet/alignment.css"

const AlignmentEditor = () =>{
    const [source,setSource] = useState([]);
    const [target,setTarget] = useState([]);
    const addSource = (e) =>{
        let id = e.target.id;
        let name = e.target.innerHTML;
        let selectedElement=document.getElementById(id).classList
        if(selectedElement.length==1)
        {
            document.getElementById(id).classList.add("active-token")
            setSource([...source, {"id":id,"name":name}])
        }else{
            let arr=[];
            for(let i=0;i<source.length;i++)
            {
                if(source[i].id!==id)
                {
                    arr=[...arr,source[i]]
                }
            }
            setSource(arr)
            document.getElementById(id).classList.remove("active-token")
        }
    }
    const addTarget = (e) =>{
        let id = e.target.id;
        let name = e.target.innerHTML;
        let selectedElement=document.getElementById(id).classList
        if(selectedElement.length==1)
        {
            document.getElementById(id).classList.add("active-token")
            setTarget([...target, {"id":id,"name":name}])
        }else{
            let arr=[];
            for(let i=0;i<target.length;i++)
            {
                if(target[i].id!==id)
                {
                    arr=[...arr,target[i]]
                }
            }
            setTarget(arr)
            document.getElementById(id).classList.remove("active-token")
        }
    }
    return(
        <>
        <div className="container">
        <div className="alignmentBox1">
            <div className="source-box">
                <h3>Source</h3>
                <div>
                    <span className="token" id="source1" onClick={(e)=>{addSource(e)}}>a</span>
                    <span className="token" id="source2" onClick={(e)=>{addSource(e)}}>b</span>
                    <span className="token" id="source3" onClick={(e)=>{addSource(e)}}>c</span>
                    <span className="token" id="source4" onClick={(e)=>{addSource(e)}}>d</span>

                </div>
            </div>
            <div className="target-box">
                <h3>Target</h3>
                <div>
                <span className="token" id="target1" onClick={(e)=>{addTarget(e)}}>a</span>
                    <span className="token" id="target2" onClick={(e)=>{addTarget(e)}}>b</span>
                    <span className="token" id="target3" onClick={(e)=>{addTarget(e)}}>c</span>
                    <span className="token" id="target4" onClick={(e)=>{addTarget(e)}}>d</span>
                </div>
            </div>
        </div>
        <div className="alignmentBox2">
        <div className="source-box1">
            {
                source.map((item)=>{
                    return(
                        <span className="token">{item.name}</span>
                    )
                })
            }
            </div>
            <div className="target-box1">
             {
                target.map((item)=>{
                    return(
                        <span className="token">{item.name}</span>
                    )
                })
            }
            </div>
            </div>
        </div>
        </>
    )
}
export default AlignmentEditor;