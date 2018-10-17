import React from 'react'
import styled from 'styled-components'
import Task from './task.js'
import { Droppable, Draggable} from 'react-beautiful-dnd'


const Container = styled.div`
    margin:8px;
    border: 1px solid lightgrey;
    border-radius:2px;
    width:320px;
    display: flex;
    flex-direction: column;
    background-color:white;
`
const Title = styled.h3`
    padding:8px;
    text-align:center;
`
const TaskList = styled.div`
    padding:8px;
    transition: background-color 0.2s ease;
    background-color: ${props=>(props.isDraggingOver ? '#F5F8FA':'inherit')}
    flex-grow:1;
    min-height: 100px;
`
export default class Column extends React.Component {
    render(){
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {(provided)=>(
                <Container
                {...provided.draggableProps}
                ref={provided.innerRef}
                >   
                    <Title {...provided.dragHandleProps}>
                        {this.props.column.title}
                    </Title>
                    <Droppable droppableId={this.props.column.id} type="task">
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver = {snapshot.isDraggingOver}
                            >
                                {this.props.tasks.map((task, index)=> <Task key={task.id} task={task} index={index}/>)}
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>
                )}
            </Draggable>
        )
    }
}