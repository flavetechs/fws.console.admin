import { useEffect, useState } from "react";
import "./pagination.css"
const PaginationFilter = (props: any = null) => {
    const [pages, setpages] = useState<any[]>([]);
    useEffect(() => {
        setpages(Array.from({ length: props.filterProps.totalPages }, (_, i) => i + 1))
    }, [props.filterProps.totalPages])

    return (
        <>
            <div className="bd-example d-flex justify-content-end">
                <nav aria-label="Another pagination example">
                    <ul className="pagination pagination-lg flex-wrap">
                        <li className="page-item ">
                            <a className={props.filterProps.previousPage
                                ? "page-link" : " page-link disabled"} onClick={() => {
                                    props.filterProps.previousPage && props.action(props.filterProps.pageNumber - 1)(props.dispatch)
                                }} >Previous</a>
                        </li>
                        {
                            pages.map((page, idx) => {
                                return (
                                    <li key={idx} className={props.filterProps.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
                                        <a className="page-link" onClick={() => {
                                            props.action(page)(props.dispatch)
                                        }}>{page}</a>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <a className={props.filterProps.nextPage ? "page-link" : " page-link disabled"} onClick={() => {
                                props.filterProps.nextPage && props.action(props.filterProps.pageNumber + 1)(props.dispatch)
                            }}  >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default PaginationFilter;

export const PaginationFilter1 = (props: any = null) => {
    const [pages, setpages] = useState<any[]>([]);
    useEffect(() => {
        setpages(Array.from({ length: props.filterProps.totalPages }, (_, i) => i + 1))
    }, [props.filterProps.totalPages])

    return (
        <>
            <div className="bd-example d-flex justify-content-end">
                <nav aria-label="Another pagination example">
                    <ul className="pagination pagination-lg flex-wrap">
                        <li className="page-item ">
                            <a className={props.filterProps.previousPage
                                ? "page-link" : " page-link disabled"} onClick={() => {
                                    props.filterProps.previousPage && props.action(props.filterProps.pageNumber - 1, props.param1)(props.dispatch)
                                }} >Previous</a>
                        </li>
                        {
                            pages.map((page, idx) => {
                                return (
                                    <li key={idx} className={props.filterProps.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
                                        <a className="page-link" onClick={() => {
                                            props.action(page, props.param1)(props.dispatch)
                                        }}>{page}</a>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <a className={props.filterProps.nextPage ? "page-link" : " page-link disabled"} onClick={() => {
                                props.filterProps.nextPage && props.action(props.filterProps.pageNumber + 1, props.param1)(props.dispatch)
                            }}  >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export const PaginationFilter2 = (props: any = null) => {
    const [pages, setpages] = useState<any[]>([]);
    useEffect(() => {
        setpages(Array.from({ length: props.filterProps.totalPages }, (_, i) => i + 1))
    }, [props.filterProps.totalPages])

    return (
        <>
            <div className="bd-example d-flex justify-content-end">
                <nav aria-label="Another pagination example">
                    <ul className="pagination pagination-lg flex-wrap">
                        <li className="page-item ">
                            <a className={props.filterProps.previousPage
                                ? "page-link" : " page-link disabled"} onClick={() => {
                                    props.filterProps.previousPage && props.action(props.filterProps.pageNumber - 1, props.param1, props.param2)(props.dispatch)
                                }} >Previous</a>
                        </li>
                        {
                            pages.map((page, idx) => {
                                return (
                                    <li key={idx} className={props.filterProps.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
                                        <a className="page-link" onClick={() => {
                                            props.action(page, props.param1, props.param2)(props.dispatch)
                                        }}>{page}</a>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <a className={props.filterProps.nextPage ? "page-link" : " page-link disabled"} onClick={() => {
                                props.filterProps.nextPage && props.action(props.filterProps.pageNumber + 1, props.param1, props.param2)(props.dispatch)
                            }}  >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export const PaginationFilter3 = (props: any = null) => {
    const [pages, setpages] = useState<any[]>([]);
    useEffect(() => {
        setpages(Array.from({ length: props.filterProps.totalPages }, (_, i) => i + 1))
    }, [props.filterProps.totalPages])

    return (
        <>
            <div className="bd-example d-flex justify-content-end">
                <nav aria-label="Another pagination example">
                    <ul className="pagination pagination-lg flex-wrap">
                        <li className="page-item ">
                            <a className={props.filterProps.previousPage
                                ? "page-link" : " page-link disabled"} onClick={() => {
                                    props.filterProps.previousPage && props.action(props.filterProps.pageNumber - 1, props.param1, props.param2, props.param3,)(props.dispatch)
                                }} >Previous</a>
                        </li>
                        {
                            pages.map((page, idx) => {
                                return (
                                    <li key={idx} className={props.filterProps.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
                                        <a className="page-link" onClick={() => {
                                            props.action(page, props.param1, props.param2, props.param3,)(props.dispatch)
                                        }}>{page}</a>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <a className={props.filterProps.nextPage ? "page-link" : " page-link disabled"} onClick={() => {
                                props.filterProps.nextPage && props.action(props.filterProps.pageNumber + 1, props.param1, props.param2, props.param3,)(props.dispatch)
                            }}  >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export const PaginationFilter4 = (props: any = null) => {
    const [pages, setpages] = useState<any[]>([]);
    useEffect(() => {
        setpages(Array.from({ length: props.filterProps.totalPages }, (_, i) => i + 1))
    }, [props.filterProps.totalPages])

    return (
        <>
            <div className="bd-example d-flex justify-content-end">
                <nav aria-label="Another pagination example">
                    <ul className="pagination pagination-lg flex-wrap">
                        <li className="page-item ">
                            <a className={props.filterProps.previousPage
                                ? "page-link" : " page-link disabled"} onClick={() => {
                                    props.filterProps.previousPage && props.action(props.param1, props.param2, props.param3, props.param4, props.filterProps.pageNumber - 1)(props.dispatch)
                                }} >Previous</a>
                        </li>
                        {
                            pages.map((page, idx) => {
                                return (
                                    <li key={idx} className={props.filterProps.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
                                        <a className="page-link" onClick={() => {
                                            props.action(props.param1, props.param2, props.param3, props.param4, page)(props.dispatch)
                                        }}>{page}</a>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <a className={props.filterProps.nextPage ? "page-link" : " page-link disabled"} onClick={() => {
                                props.filterProps.nextPage && props.action(props.param1, props.param2, props.param3, props.param4, props.filterProps.pageNumber + 1)(props.dispatch)
                            }}  >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

// export const PaginationFilterForCandidateAnswers = (props: any = null) => {
//     const [pages, setpages] = useState<any[]>([]);
//     const [submittedPageNo, setSubmittedPageNo] = useState<any[]>([]);
//     const [storedSubmittedPageNo, setStoredSubmittedPageNo] = useState<any[]>([]);
//     const savedSubmittedPageNo = localStorage.getItem("savedSubmitted") || "";
//     useEffect(() => {
//         if (savedSubmittedPageNo) {
//             setStoredSubmittedPageNo(JSON.parse(savedSubmittedPageNo || ""))
//         } else {
//             setStoredSubmittedPageNo(submittedPageNo)
//         }
//     }, [submittedPageNo, savedSubmittedPageNo])

//     useEffect(() => {
//         submittedPageNo.length > 0 && localStorage.setItem("savedSubmitted", JSON.stringify(submittedPageNo))
//     }, [submittedPageNo])


//     useEffect(() => {
//         setpages(Array.from({ length: props.filterProps.totalPages }, (_, i) => i + 1))
//     }, [props.filterProps.totalPages])

//     const handleNextAndPrevButton = async (dispatch: any) => {
//       //  props.payload && await submitAnswer(props.payload)(dispatch);

//     };


//     // console.log("savedSubmittedPageNo", savedSubmittedPageNo);
//     // console.log("storedSubmittedPageNo", storedSubmittedPageNo);
//     return (
//         <>
//             <div className="bd-example d-flex justify-content-end">
//                 <nav aria-label="Another pagination example">
//                     <ul className="pagination pagination-lg flex-wrap">
//                         <li className="page-item ">
//                             <a className={props.filterProps.previousPage
//                                 ? "page-link" : " page-link disabled"} onClick={async () => {
//                                     props.currentQuestionId && await handleNextAndPrevButton(props.dispatch).then(res => {
//                                         props.filterProps.previousPage && props.setUserAnswers([]);
//                                         props.filterProps.previousPage && props.action(props.filterProps.pageNumber - 1, props.param1)(props.dispatch)
//                                     }).catch(err => console.log(err));
//                                     if (props.answers.length > 0) {
//                                         const filteredArray = storedSubmittedPageNo?.filter((d: any) => d !== props.filterProps.pageNumber);
//                                         setSubmittedPageNo([...filteredArray, props.filterProps.pageNumber]);

//                                     } else {
//                                         if (storedSubmittedPageNo.find((sub: any) => sub == props.filterProps.pageNumber)) {
//                                             setSubmittedPageNo(storedSubmittedPageNo.splice(props.filterProps.pageNumber - 1, 1))
//                                         }
//                                     }
//                                 }} >Previous</a>
//                         </li>
//                         {
//                             pages.map((page, idx) => {
//                                 return (

//                                     <li key={idx} className={props.filterProps.pageNumber === page ? "page-item active" : "page-item"} aria-current="page" >
//                                         <a className={`page-link ${storedSubmittedPageNo?.find((d: any) => d == page) && "done"}`} onClick={async () => {

//                                             props.currentQuestionId && await handleNextAndPrevButton(props.dispatch).then(res => {
//                                                 props.setUserAnswers([]);
//                                                 props.action(page, props.param1)(props.dispatch)
//                                             }).catch(err => console.log(err));

//                                             if (props.answers.length > 0) {
//                                                 const filteredArray = storedSubmittedPageNo?.filter((d: any) => d !== props.filterProps.pageNumber);
//                                                 setSubmittedPageNo([...filteredArray, props.filterProps.pageNumber]);

//                                             } else {
//                                                 if (storedSubmittedPageNo.find((sub: any) => sub == props.filterProps.pageNumber)) {
//                                                     setSubmittedPageNo(storedSubmittedPageNo.splice(idx, 1))
//                                                 }
//                                             }
//                                         }}>{page}</a>
//                                     </li>
//                                 )
//                             })
//                         }

//                         <li className="page-item">
//                             <a className={props.filterProps.nextPage ? "page-link" : " page-link disabled"} onClick={async () => {

//                                 props.currentQuestionId && await handleNextAndPrevButton(props.dispatch).then(res => {
//                                     props.filterProps.nextPage && props.setUserAnswers([]);
//                                     props.filterProps.nextPage && props.action(props.filterProps.pageNumber + 1, props.param1)(props.dispatch)
//                                 }).catch(err => console.log(err));
//                                 if (props.answers.length > 0) {
//                                     const filteredArray = storedSubmittedPageNo?.filter((d: any) => d !== props.filterProps.pageNumber);
//                                     setSubmittedPageNo([...filteredArray, props.filterProps.pageNumber]);

//                                 } else {
//                                     if (storedSubmittedPageNo.find((sub: any) => sub == props.filterProps.pageNumber)) {
//                                         setSubmittedPageNo(storedSubmittedPageNo.splice(props.filterProps.pageNumber - 1, 1))
//                                     }
//                                 }
//                             }}  >Next</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>

//         </>
//     )
// }

// export const PaginationFilterForCandidateAnswers2 = (props: any = null) => {
//     const [pages, setpages] = useState<any[]>([]);
//     const [submittedPageNo, setSubmittedPageNo] = useState<any[]>([1]);
//     const [currentPage, setCurrentPage] = useState<number>(1);
//     const [storedSubmittedPageNo, setStoredSubmittedPageNo] = useState<any[]>([]);
//     const savedSubmittedPageNo = localStorage.getItem("savedSubmitted") || "";
//     const questionIds = sessionStorage.getItem("questionsId");
//     const questionIdArray = JSON.parse(questionIds || "")

//     useEffect(() => {
//         if (savedSubmittedPageNo) {
//             setStoredSubmittedPageNo(JSON.parse(savedSubmittedPageNo || ""))
//         } else {
//             setStoredSubmittedPageNo(submittedPageNo)
//         }
//     }, [submittedPageNo, savedSubmittedPageNo])

//     useEffect(() => {
//         submittedPageNo.length > 1 && localStorage.setItem("savedSubmitted", JSON.stringify(submittedPageNo))
//     }, [submittedPageNo])

//     useEffect(() => {
//         sessionStorage.setItem("currentPage", JSON.stringify(currentPage))
//     }, [currentPage])

//     useEffect(() => {
//         setpages(Array.from({ length: questionIds && questionIdArray.length }, (_, i) => i + 1))
//     }, [questionIds])

//     const handleNextAndPrevButton = async (dispatch: any) => {
//         props.payload && await submitAnswer(props.payload)(dispatch);

//     };

//     const handleCandidateAnswers = () => {
//         if (props.answers.length > 0) {
//             const filteredArray = storedSubmittedPageNo?.filter((d: any) => d !== currentPage);
//             setSubmittedPageNo([...filteredArray, currentPage]);

//         } else {
//             if (storedSubmittedPageNo.find((sub: any) => sub === currentPage)) {
//                 storedSubmittedPageNo.splice(currentPage - 1, 1)
//             }
//         }
//     }
//     // console.log("submittedPageNo",[1,2,3,4,5].splice(5-1,1));
//     // console.log("currentPage",currentPage);
    
//     return (
//         <>
//             <div className="bd-example d-flex justify-content-end">
//                 <nav aria-label="Another pagination example">
//                     <ul className="pagination pagination-lg flex-wrap">
//                         <li className="page-item ">
//                             <a className={currentPage - 1 > 0
//                                 ? "page-link" : " page-link disabled"} onClick={async () => {
//                                     setCurrentPage(currentPage - 1 == 0 ? currentPage : currentPage - 1)
//                                     props.currentQuestionId && await handleNextAndPrevButton(props.dispatch).then(res => {
//                                         currentPage - 1 > 0 && props.setUserAnswers([]);
//                                         currentPage - 1 > 0 && props.action(questionIdArray[currentPage - 2])(props.dispatch)
//                                     }).catch(err => console.log(err));
//                                     handleCandidateAnswers();
//                                 }} >Previous</a>
//                         </li>
//                         {
//                             pages.map((page, idx) => {
//                                 return (

//                                     <li key={idx} className={currentPage === page ? "page-item active" : "page-item"} aria-current="page" >
//                                         <a className={`page-link ${storedSubmittedPageNo?.find((d: any) => d == page) && "done"}`} onClick={async () => {
//                                             setCurrentPage(page)
//                                             props.currentQuestionId && await handleNextAndPrevButton(props.dispatch).then(res => {
//                                                 props.setUserAnswers([]);
//                                                props.action(questionIdArray[page - 1])(props.dispatch)
//                                             }).catch(err => console.log(err));

//                                             if (props.answers.length > 0) {
//                                                 const filteredArray = storedSubmittedPageNo?.filter((d: any) => d !== currentPage);
//                                                 setSubmittedPageNo([...filteredArray, currentPage]);

//                                             } else {
//                                                 if (storedSubmittedPageNo.find((sub: any) => sub == currentPage)) {
//                                                    storedSubmittedPageNo.splice(currentPage - 1, 1)
//                                                 }
//                                             }
                                            
//                                         }}>{page}</a>
//                                     </li>
//                                 )
//                             })
//                         }

//                         <li className="page-item">
//                             <a className={currentPage + 1 <= questionIdArray.length ? "page-link" : " page-link disabled"} onClick={async () => {
//                                 setCurrentPage(currentPage == questionIdArray.length ? currentPage : currentPage + 1)
//                                 props.currentQuestionId && await handleNextAndPrevButton(props.dispatch).then(res => {
//                                     currentPage + 1 <= questionIdArray.length && props.setUserAnswers([]);
//                                     currentPage + 1 <= questionIdArray.length && props.action(questionIdArray[currentPage])(props.dispatch)
//                                 }).catch(err => console.log(err));
//                                 handleCandidateAnswers();
//                             }}  >Next</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>

//         </>
//     )
// }