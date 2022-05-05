import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Stylesheet/alignment.css"
import linkImg from "../../Assets/link.png"
import unlinkImg from "../../Assets/unlink.png"
import LineTo from "react-lineto";
import { useHistory } from 'react-router-dom'
import LinkIcon from '@material-ui/icons/Link';
import RefreshIcon from '@material-ui/icons/Refresh';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const AlignmentEditor = (props) => {
    const history = useHistory();
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const [data, setData] = useState([]);
    const [line, setLine] = useState(false)
    const [link, setLink] = useState([])
    const [translation, setTranslation] = useState([])
    useEffect(() => {
        axios.get("https://api.vachanengine.org/v2/autographa/project/tokens?project_id=100008&sentence_id_list=57001001&use_translation_memory=true&include_phrases=true&include_stopwords=false", {
            headers: {
                "app": "Autographa",
                "Authorization": `Bearer ${localStorage.getItem('token')
                    }`
            }
        }).then((item) => {
            console.log(item)
            let dataArr = []
            let dataFill = {}
            let sourceArr = []
            let sourceLink = {}
            item.data.map((item, index) => {
                if (Object.keys(item.translations).length === 0) {
                    dataFill = {
                        "token": item.token,
                        "class": "token",
                        "occurrences": item.occurrences,
                        "translation": ""
                    }
                } else {
                    let translationArr = Object.keys(item.translations)
                    console.log(translationArr)
                    sourceLink = {
                        "source": [`source${index}`],
                        "target": [`target${index}`],
                        "token": item.token,
                        "occurrences": item.occurrences,
                        "translation": translationArr

                    }
                    dataFill = {
                        "token": item.token,
                        "class": "token set-token",
                        "occurrences": item.occurrences,
                        "translation": translationArr
                    }
                    sourceArr = [
                        ...sourceArr,
                        sourceLink
                    ]
                } dataArr = [
                    ...dataArr,
                    dataFill
                ]
            })
            setLink(sourceArr)
            setData(dataArr)
        }).catch((error) => {
            if (error.response.status === 401) {
                alert("Login expired, please try again")
                const token = localStorage.getItem('token')
                axios.get("https://api.vachanengine.org/redoc#operation/logout_v2_user_logout_get", {
                    headers: {
                        'content-type': 'application/json',
                        'token': token
                    }
                }).then(() => {
                    props.setlogin(false)
                    localStorage.removeItem('token')
                    localStorage.removeItem('login')
                    history.push("/")
                }).catch((err) => { })
            }
        })
    }, [line])
    const addSource = (e, index) => {
        let id = e.target.id;
        let name = e.target.innerHTML;
        let selectedElement = document.getElementById(id).classList
        if (!selectedElement.contains("not-allowed-token")) {
            if (selectedElement.contains("set-token")) {
                setSource([])
                setTarget([])
                let sourceArr = [];
                let targetArr = [];
                for (let i = 0; i < link.length; i++) {
                    let method = link[i].source;
                    for (let j = 0; j < method.length; j++) {
                        if (method[j] === id) {
                            link[i].source.map(item => {
                                sourceArr = [
                                    ...sourceArr, {
                                        "id": item,
                                        "name": document.getElementById(item).innerHTML
                                    }
                                ]
                                document.getElementById(item).classList.add("active-token")
                            })
                            link[i].target.map(item => {
                                targetArr = [
                                    ...targetArr, {
                                        "id": item,
                                        "name": document.getElementById(item).innerHTML
                                    }
                                ]
                                console.log(sourceArr,targetArr)
                                setSource(sourceArr)
                                setTarget(targetArr)
                                document.getElementById(item).classList.add("active-token")
                            })
                        }
                    }
                }
                let item = document.getElementsByClassName("token")
                for (let i = 0; i < item.length; i++) {
                    document.getElementById(item[i].id).classList.add("not-allowed-token")
                }
                document.getElementById("unlinkButton").style.cursor = "pointer"
                document.getElementById("refreshButton").style.cursor = "pointer"
            } else if (selectedElement.contains("active-token")) {
                let arr = [];
                for (let i = 0; i < source.length; i++) {
                    if (source[i].id !== id) {
                        arr = [
                            ...arr,
                            source[i]
                        ]
                    }
                }
                setSource(arr)
                document.getElementById(id).classList.remove("active-token")
            } else {
                document.getElementById("linkButton").style.cursor = "pointer"
                document.getElementById("refreshButton").style.cursor = "pointer"
                document.getElementById(id).classList.add("active-token")
                setSource([
                    ...source, {
                        "id": id,
                        "name": name
                    }
                ])
            }
        }
    }
    const addTarget = (e) => {
        let id = e.target.id;
        let name = e.target.innerHTML;
        let selectedElement = document.getElementById(id).classList
        if (!selectedElement.contains("not-allowed-token")) {
            if (selectedElement.contains("set-token")) {
                setSource([])
                setTarget([])
                let sourceArr = [];
                let targetArr = [];
                for (let i = 0; i < link.length; i++) {
                    let method = link[i].target;
                    for (let j = 0; j < method.length; j++) {
                        if (method[j] === id) {
                            link[i].source.map(item => {
                                sourceArr = [
                                    ...sourceArr, {
                                        "id": item,
                                        "name": document.getElementById(item).innerHTML
                                    }
                                ]
                                document.getElementById(item).classList.add("active-token")
                            })
                            link[i].target.map(item => {
                                targetArr = [
                                    ...targetArr, {
                                        "id": item,
                                        "name": document.getElementById(item).innerHTML
                                    }
                                ]
                                setSource(sourceArr)
                                setTarget(targetArr)
                                document.getElementById(item).classList.add("active-token")
                            })
                        }
                    }
                }
                let item = document.getElementsByClassName("token")
                for (let i = 0; i < item.length; i++) {
                    document.getElementById(item[i].id).classList.add("not-allowed-token")
                }
                document.getElementById("unlinkButton").style.cursor = "pointer"
                document.getElementById("refreshButton").style.cursor = "pointer"
            } else if (selectedElement.contains("active-token")) {
                let arr = [];
                for (let i = 0; i < target.length; i++) {
                    if (target[i].id !== id) {
                        arr = [
                            ...arr,
                            target[i]
                        ]
                    }
                }
                setTarget(arr)
                document.getElementById(id).classList.remove("active-token")
            } else {
                document.getElementById(id).classList.add("active-token")
                setTarget([
                    ...target, {
                        "id": id,
                        "name": name
                    }
                ])
            }
        }
    }
    const linkHandler = () => {
        console.log(source,target)
        let token = ""
        let occur = ""
        let translate = ""
        console.log(source, target)
        if (source.length !== 0 && target.length !== 0) {
            let sourceArray = [];
            let targetArray = [];
            for (let i = 0; i < source.length; i++) {
                let index = source[i].id.match(/\d+/)[0]
                if (token === "") {
                    token = data[index].token
                } else {
                    token = `${token} ${data[index].token}`
                }
                if (occur === "") {
                    occur = data[index].occurrences
                } else {
                    occur = [...occur, data[index].occurrences]
                }
                document.getElementById(source[i].id).classList.remove("active-token")
                document.getElementById(source[i].id).classList.add("set-token")
                sourceArray = [
                    ...sourceArray,
                ]
            }
            for (let i = 0; i < target.length; i++) {
                let index1 = target[i].id.match(/\d+/)[0]
                if (translate === "") {
                    translate = data[index1].translation
                } else {
                    translate = `${translate} ${data[index1].translation}`
                }
                document.getElementById(target[i].id).classList.remove("active-token")
                document.getElementById(target[i].id).classList.add("set-token")
                targetArray = [
                    ...targetArray,
                    target[i].id
                ]
            }
            let newArr = [{
                // source: sourceArray,
                // target: targetArray,
                "token": token,
                "translation": translate,
                "occurrences": occur,
                "source": [source[0].id],
                "target": [target[0].id]
            }]
            let arr = link.concat(newArr)
            setLink(arr)
            setSource([])
            setTarget([])
            document.getElementById("refreshButton").style.cursor = "not-allowed"
            document.getElementById("linkButton").style.cursor = "not-allowed"
        } else {
            alert("please select target & source")
        }

        // setLink(...link,{
        //     source: sourceArray,
        //     target: targetArray
        // })

        // let arr = source.concat(target);
        // document.getElementById("setsource0").classList.add("line1");
        // document.getElementById("settarget0").classList.add("line2");
        // setLine({"l1": "line1", "l2": "line2"})
    }
    const unlinkHandler = () => {
        let selectedIndex;
        let newArr = []
        link.map((item, index) => {
            for (let i = 0; i < item.source.length; i++) {
                if (item.source[i] === source[0].id) {
                    selectedIndex = index
                }
            }
        })
        link.filter((item, index) => {
            if (index != selectedIndex) {
                newArr = [
                    ...newArr,
                    item
                ]
            }
        })
        setLink(newArr);
        for (let i = 0; i < source.length; i++) {
            document.getElementById(source[i].id).classList.remove("set-token")
            document.getElementById(source[i].id).classList.remove("active-token")
        }
        for (let i = 0; i < target.length; i++) {
            document.getElementById(target[i].id).classList.remove("set-token")
            document.getElementById(target[i].id).classList.remove("active-token")
        }
        let item = document.getElementsByClassName("token")
        for (let i = 0; i < item.length; i++) {
            document.getElementById(item[i].id).classList.remove("not-allowed-token")
        }
        setSource([]);
        setTarget([]);
        document.getElementById("linkButton").style.cursor = "not-allowed"
        document.getElementById("unlinkButton").style.cursor = "not-allowed"
        document.getElementById("refreshButton").style.cursor = "not-allowed"

    }
    const refreshState = () => {
        let item = document.getElementsByClassName("token")
        for (let i = 0; i < item.length; i++) {
            if (document.getElementById(item[i].id).classList.contains("active-token")) {
                document.getElementById(item[i].id).classList.remove("active-token")
            }
            document.getElementById(item[i].id).classList.remove("not-allowed-token")
        }
        setSource([])
        setTarget([])
        document.getElementById("unlinkButton").style.cursor = "not-allowed"
        document.getElementById("refreshButton").style.cursor = "not-allowed"
        document.getElementById("linkButton").style.cursor = "not-allowed"
    }
    const addWord = () => {
        let enteredData = {
            "token": "",
            "class": "token",
            "translation": [translation]
        }
        setData([
            ...data,
            enteredData
        ])
        setTranslation("")
    }
    const submitTranslation = () => {
        for (let i = 0; i < link.length; i++) {
            if (link[i].occurrences.length > 1) {
                console.log(link[i].occurrences);
            }
            delete link[i].source;
            delete link[i].target;
        }
        console.log(link);
        // axios.put("https://api.vachanengine.org/v2/autographa/project/tokens?project_id=100008",link,{
        //     headers: {
        //         "app": "Autographa",
        //         "content-type": "application/json",
        //         "Authorization": `Bearer ${
        //             localStorage.getItem('token')
        //         }`
        //     }
        // }).then((item)=>{
        //     alert("translation saved");
        //     console.log(item);
        // }).catch((error)=>{
        //     console.log(error)
        // })
    }
    return (
        <>
            <div className="container">
                <div className="alignment-container">
                    <div className="alignmentBox1">
                        <div className="source-box">
                            <h3>Source</h3>
                            <div></div>
                            <div> {
                                data.map((item, index) => {
                                    if (item.token !== "") {
                                        return (
                                            <span className={
                                                item.class
                                            }
                                                id={
                                                    `source${index}`
                                                }
                                                onClick={
                                                    (e) => {
                                                        addSource(e, index)
                                                    }
                                                }>
                                                {
                                                    item.token
                                                }</span>
                                        )
                                    }
                                })
                            } </div>
                        </div>
                        <div className="target-box">
                            <h3>Target</h3>
                            <div className="target-suggestions">
                                {
                                    data.map((item, index) => {
                                        if (item.translation !== "") {
                                            if (item.translation.length === 1) {
                                                return (
                                                    <span className={
                                                        item.class
                                                    }
                                                        id={
                                                            `target${index}`
                                                        }
                                                        onClick={
                                                            (e) => {
                                                                addTarget(e, index)
                                                            }
                                                        }>
                                                        {
                                                            item.translation
                                                        } </span>
                                                )
                                            } else {
                                                return (
                                                    <select className={
                                                        item.class
                                                    }>
                                                         {
                                                            item.translation.map((item,index) => {
                                                                return (
                                                                    <option value={10} key={index}>{item}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                    // <Select
                                                    //     labelId="demo-simple-select-label"
                                                    //     id="demo-simple-select"
                                                    //     // defaultValue={item.translations[0]}
                                                    //     autoWidth="true"
                                                    //     value={"ashish"}
                                                    //     // style={{
                                                    //     //     width: "200px"
                                                    //     // }}
                                                    // // value={age}
                                                    // // onChange={handleChange}
                                                    // >
                                                    //     {
                                                    //         item.translation.map((item,index) => {
                                                    //             return (
                                                    //                 <MenuItem value={10} key={index}>{item}</MenuItem>
                                                    //             )
                                                    //         })
                                                    //     }
                                                    // </Select>
                                                )
                                            }
                                        }
                                    })
                                } </div>
                            <div className="target-textbox">
                                <TextField id="filled-basic" label="Enter Translation" variant="outlined"
                                    value={translation}
                                    onChange={
                                        (e) => {
                                            setTranslation(e.target.value)
                                        }
                                    }
                                    onKeyPress={
                                        (e) => {
                                            if (e.key === "Enter") {
                                                addWord()
                                            }
                                        }
                                    } />
                                <Avatar style={
                                    { marginLeft: "20px" }
                                }
                                    onClick={
                                        () => {
                                            addWord()
                                        }
                                    }>
                                    <SendIcon />
                                </Avatar>
                            </div>
                        </div>
                    </div>
                    <div className="alignmentBox2">
                        <div className="source-box1">
                            {
                                source.map((item, index) => {
                                    return (
                                        <span className="token line0"
                                            id={
                                                `setsource${index}`
                                            }>
                                            {
                                                item.name
                                            }</span>
                                    )
                                })
                            } </div>
                        {
                            line ? <LineTo from="line0" to="line1" /> : null
                        }
                        <div className="target-box1">
                            {
                                target.map((item, index) => {
                                    return (
                                        <span className="token line1"
                                            id={
                                                `settarget${index}`
                                            }>
                                            {
                                                item.name
                                            }</span>
                                    )
                                })
                            } </div>
                    </div>
                </div>
                <div className="control-panel">
                    <div className="control-panel-btn"></div>
                    <LinkIcon fontSize="large"
                        onClick={
                            () => {
                                linkHandler()
                            }
                        }
                        id="linkButton"
                        style={
                            { cursor: "not-allowed" }
                        } />
                    <LinkOffIcon fontSize="large"
                        onClick={
                            () => {
                                unlinkHandler();
                            }
                        }
                        id="unlinkButton"
                        style={
                            { cursor: "not-allowed" }
                        } />
                    <RefreshIcon fontSize="large" id="refreshButton"
                        style={
                            { cursor: "not-allowed" }
                        }
                        onClick={
                            () => {
                                refreshState()
                            }
                        } />
                    <div className="final-submission-button">
                        <Button variant="contained" color="primary" onClick={() => { submitTranslation() }}>
                            Final Submission
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AlignmentEditor;
