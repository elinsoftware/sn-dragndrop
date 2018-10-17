import React from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'
import { Button, Card, Elevation } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css'

const Container = styled.div`
    padding: 8px;
    margin-bottom:8px;   
`
const Header = styled.div`
    display:flex;
`
const Number = styled.div`
    position:relative;
    float:left;
    width:50%;
    margin-top:5px;
    font-size:14px;
    font-weight:bold;
`
const Btn = styled.div`
    display:flex;
    justify-content:end;
    width:50%;
    -webkit-justify-content: flex-end;
`
const Submitted = styled.div`
    color: #5c7080;
    font-size:11px;
    margin-top: 10px;
`
export default class Task extends React.Component {
    render(){
        return(
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
               {(provided, snapshot) =>(
                    <Container
                    ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging = {snapshot.isDragging}
                    >
                    <Card interactive={true} elevation={Elevation.TWO}>
                    <Header>
                        <Number>{this.props.task.number}</Number>
                        <Btn><Button small="true">View</Button></Btn>
                    </Header>
                        
                        <p>{this.props.task.content}</p>
                        
                        <Submitted>submitted by {this.props.task.submittedBy}</Submitted>
                    </Card>
                    </Container>
               )}
            </Draggable>
        )
    }
}