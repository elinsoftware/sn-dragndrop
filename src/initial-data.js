const initialData = {
    tasks: {
        'task-1': {id: 'task-1', content:"Manager can't access SAP Controlling application", number:"INC026232", submittedBy:"Alex Moreno", tag:"vip", tagColor:"success"},
        'task-2': {id: 'task-2', content:"Lost connection to the wireless network", number:"REC011332", submittedBy:"Vanessa Lewallen"},
        'task-3': {id: 'task-3', content:"Office Keys - Request to get a new one", number:"REC011732", submittedBy:"Bow Ruggeri"},
        'task-4': {id: 'task-4', content:"EMAIL is slow when an attachment is involved", number:"INC026232", submittedBy:"Carol Coughlin",tag:"critical", tagColor:"danger"},
        'task-5': {id: 'task-5', content:"Need access to sales DB for the West", number:"REC058232", submittedBy:"Rick Berzle"},
        'task-6': {id: 'task-6', content:"File Server is 80% full - Needs upgrade", number:"INC020022", submittedBy:"David Loo"},
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