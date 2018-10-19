import React from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'
import { Button, Card, Elevation, Tag } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css'

const Container = styled.div`
    padding: 8px;
    margin-bottom:8px;   
`
const Row = styled.div`
    display:flex;
`
const RowM = styled.div`
    display:flex;
    margin-top:15px;
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

const T = styled.div`
    display:flex;
    justify-content:end;
    width:50%;
    -webkit-justify-content: flex-end;
    width:auto%;
    margin-right:-5px;
`

const Submitted = styled.div`
    color: #5c7080;
    font-size:11px;
    position:relative;
    float:left;
    width:70%;
    margin-top:3px;
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
                    <Card interactive={true} elevation={Elevation.ONE}>
                    <Row>
                        <Number>{this.props.task.number}</Number>
                        <Btn><Button small="true">View</Button></Btn>
                    </Row>
                        <p>{this.props.task.content}</p>
                    <RowM>
                        <Submitted>{this.props.task.submittedBy}</Submitted>
                        {this.props.task.tag &&
                        <T><Tag intent={this.props.task.tagColor}>{this.props.task.tag}</Tag></T>
                        }
                    </RowM>
                    </Card>
                    </Container>
               )}
            </Draggable>
        )
    }
}