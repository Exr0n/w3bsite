import React from 'react';
import Markdown from 'marked-react';
import { Controller, Scene } from 'react-scrollmagic';

import Fade from 'react-reveal/Fade';

import logo from './logo.png';


const sections = {
    'Projects': [
        {
            'title': "hewo emacs",
            'description': 'hewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewo'
        },
        {
            'title': "another thingy",
            'description': 'hewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewo'
        }
    ]
}

function App() {
    return (
            <div>
                <Controller>
                    <Scene duration={600} pin>
                        <div>Sticky Example</div>
                    </Scene>
                </Controller>
            </div>
    )
}

//function App() {
//    return (
//        <div className="flex-col w-screen h-screen overflow-x-hidden overflow-y-scroll bg-dark text-primary">
//            <div className="h-screen">
//        hewo
//            </div>
//            <div className="w-5/6 m-auto">
//            {
//                Object.entries(sections).map(([sec_title, items]) => <div className="flex flex-col">{
//                    Object.values(items).map(({title, description}) => {
//
//                        console.log(description)
//                        return <>
//                            <div className="flex items-center h-screen p-2 border-2 border-primary">
//                                <Fade bottom>
//                                    <div className="justify-center border-4 border-primary max-w-prose">
//                                        <span className="text-xl font-bold">{title}</span>
//                                        <div><Markdown value={description} /></div>
//                                    </div>
//                                </Fade>
//                            </div>
//                        </>
//                    })}
//                    </div>
//                )
//            }
//            </div>
//        </div>
//    );
//}

export default App
