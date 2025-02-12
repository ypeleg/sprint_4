import { TaskList } from "./TaskList";





export function GroupList() {



    return (
        <section className="group-lists">
        
                        <div className="list base-components-list">
                            
                            <div className="list-header just-flex">
                                <span>In Progress</span>
                                <div className="group-list-headr-btns">
                                    <i className="fa-regular fa-arrows-h"></i>
                                    <i className="fa-regular fa-ellipsis-h"></i>
                                </div>                              
                            </div>


                            <TaskList/>

                            <div className="group-list-footer">
                                <button className="add-card-btn"><i className="fa-regular fa-plus"></i> Add a card</button>
                                <button className="create-from-template-btn"><i className="fa-regular fa-vector-square"></i></button>
                            </div>
                        </div>
                        <div className="list base-components-list">
                            
                            <div className="list-header just-flex">
                                <span>In Progress</span>
                                <div className="group-list-headr-btns">
                                    <i className="fa-regular fa-arrows-h"></i>
                                    <i className="fa-regular fa-ellipsis-h"></i>
                                </div>                              
                            </div>


                            <TaskList/>
                            <TaskList/>
                        
                            
                            <div className="group-list-footer">
                                <button className="add-card-btn"><i className="fa-regular fa-plus"></i> Add a card</button>
                                <button className="create-from-template-btn"><i className="fa-regular fa-vector-square"></i></button>
                            </div>
                        </div>
                    
             
                        

                    </section>

    )
}