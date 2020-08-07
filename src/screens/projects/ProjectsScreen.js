import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { projectsList } from '../../redux/actions/projectsActions';

import ecommerces1 from '../../images/ecommerces/ecommerces1.jpg';
import whatsup1 from '../../images/whatsup/whatsup1.jpg';
import imgShare1 from '../../images/imgShare/imgShare1.jpg';
import trex1 from '../../images/T-Rex/t-rex1.jpg';

import Modal from '../../components/modal/Modal';


function ProjectsScreen(props) {
    
    const {setSelect } = props;

    const [showModal, setShowModal] = useState(false);
    const [selectProject, setSelectProject] = useState({})

    const listProjects = useSelector(state => state.listProjects);
    const {loading, error, projects} = listProjects;
    const dispatch = useDispatch();

    useEffect(() => {
        setSelect('projects')
        dispatch(projectsList());
    },[])

    return (
        <div className="container my-7">
            <div className="row slideRight justify-content-center text-primary">
                <h1 className="font-5 title">Projects</h1>
            </div>
            <div className="row my-5">
                {loading && <div className="text-dark font-4">Loading projects...</div>}
                {error && <div className="text-danger">{error}</div>}
                {
                    projects.length > 0 && projects.map((project) => {
                        return (<div className="m-1 d-flex justify-content-center col-md-auto" 
                                        key={project._id}
                                        >
                            <div className="card bounceIn hover-warning " style={{width: "50rem"}}>
                                <div className="pointer p-2" onClick={ _ => {
                                            setShowModal(!showModal);
                                            setSelectProject(project);
                                            }}>
                                    <img src={
                                        project.images[0] === 'ecommerces1' ? ecommerces1 : 
                                        project.images[0] === 'whatsup1' ? whatsup1 :
                                        project.images[0] === 'imgShare1' ? imgShare1 :
                                        trex1
                                    } className="card-img-top" alt={project.name} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title font-3 pointer text-center"
                                    onClick={ _ => {
                                        setShowModal(!showModal);
                                        setSelectProject(project);
                                        }}
                                    >{project.name}</h5>
                                    <div className="d-flex justify-content-end">
                                        <a href={project.gitHub} className="font-3 mx-2 text-dark"><i className="fab fa-github"></i></a>
                                        {
                                            project.view &&
                                            <a href={project.view} className="font-3 mx-2 text-dark"><i className="fas fa-eye"></i></a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
                { showModal &&
                    <Modal close={setShowModal} images={{ecommerces1,whatsup1,imgShare1,trex1}} project={selectProject} />
                }
        </div>
    )
}

export default ProjectsScreen
