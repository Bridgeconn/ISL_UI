import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function New() {
    const [sentence, setSentence] = useState("")
    const [metaData, setMetaData] = useState([])
    const [newData, setNewData] = useState()
    const [link,setLink] = useState()
    useEffect(() => {

        // https://api.vachanengine.org/v2/autographa/project/sentences?project_id=100008&with_draft=true
        axios.put("https://api.vachanengine.org/v2/autographa/project/suggestions?project_id=100009", {
            headers: {
                "Authorization": `Bearer ${
                    localStorage.getItem('token')
                }`,
                "app": "Autographa"
            }
        }).then((item) => {
            let sentence=item.data[0].sentence
            console.log(sentence.split(" "))
            let word = {}
            let wordArr = []
            let sourceArr = []
            let sourceLink = {}
            for (let i = 0; i < item.data[0].draftMeta.length; i++) {
                if (item.data[0].draftMeta[i][2]!=="suggestion") {
                    word = {
                        "token": item.data[0].sentence.slice(item.data[0].draftMeta[i][0][0], item.data[0].draftMeta[i][0][1]),
                        "occurrences": [
                            {
                                "sentenceId": 57001001,
                                "offset": [
                                    item.data[0].draftMeta[i][0][0],
                                    item.data[0].draftMeta[i][0][1]
                                ]
                            }
                        ],
                        "translation":"",
                        "class": "token"
                    }
                } else {
                    sourceLink = {
                        "source": [`source${i}`],
                        "target": [`target${i}`],
                        "token": item.data[0].sentence.slice(item.data[0].draftMeta[i][0][0], item.data[0].draftMeta[i][0][1]),
                        "occurrences": [
                            {
                                "sentenceId": 57001001,
                                "offset": [
                                    item.data[0].draftMeta[i][0][0],
                                    item.data[0].draftMeta[i][0][1]
                                ]
                            }
                        ],
                        "translation": [item.data[0].draft.slice(item.data[0].draftMeta[i][0][0], item.data[0].draftMeta[i][0][1])]

                    }
                    word = {
                        "token": item.data[0].sentence.slice(item.data[0].draftMeta[i][0][0], item.data[0].draftMeta[i][0][1]),
                        "occurrences": [
                            {
                                "sentenceId": 57001001,
                                "offset": [
                                    item.data[0].draftMeta[i][0][0],
                                    item.data[0].draftMeta[i][0][1]
                                ]
                            }
                        ],
                        "translation": [item.data[0].draft.slice(item.data[0].draftMeta[i][0][0], item.data[0].draftMeta[i][0][1])],
                        "class": "token set-token"
                    }
                    sourceArr = [
                        ...sourceArr,
                        sourceLink
                    ]
                } 
                wordArr = [
                    ... wordArr,
                    word
                ]
            }
            setNewData(wordArr)
            setLink(sourceArr)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    console.log(newData,link)
    return (
        <div>new
            <button onClick={
                () => {
                    console.log(newData)
                }
            }>TRY</button>
        </div>

    )
}
