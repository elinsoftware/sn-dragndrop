const initialData = {
    tasks: {
        'task-1': {id: 'task-1', content:"la la one", number:"INC026232", submittedBy:"Alex Moreno"},
        'task-2': {id: 'task-2', content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis libero quam.Fusce eu bibendum.", number:"REC011332", submittedBy:"Alex Moreno"},
        'task-3': {id: 'task-3', content:"bingo three", number:"REC011732", submittedBy:"Alex Moreno"},
        'task-4': {id: 'task-4', content:"gazorpazorp", number:"INC026232", submittedBy:"Alex Moreno"},
        'task-5': {id: 'task-5', content:"millenium", number:"RED058232", submittedBy:"Alex Moreno"},
        'task-6': {id: 'task-6', content:"Beth", number:"INC020022", submittedBy:"Alex Moreno"},
    },
    columns:{
        'column-1':{
            id: 'column-1',
            title: 'Operations',
            taskIds: ['task-1', 'task-2','task-6']
        },
        'column-2':{
            id: 'column-2',
            title: 'Administration',
            taskIds: ['task-3']
        },
        'column-3':{
            id: 'column-3',
            title: 'Application Support',
            taskIds: ['task-4']
        },
        'column-4':{
            id: 'column-4',
            title: 'Databases',
            taskIds: ['task-5']
        },
    },
    columnOrder: ['column-1','column-2','column-3','column-4'],
}
export default initialData