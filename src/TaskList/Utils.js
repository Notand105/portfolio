export const ACTIONS = {
    ADD_TASK : 'add_task',
    DELETE_TASK : 'delete_task',
    TOGGLE_TASK: 'toggle_task'
}
export const PRIORITY ={
    NORMAL:'Normal',
    HIGH: 'Important',
    URGENT: 'Urgent'
}


export class TaskClass {

    id = null
    name = ''
    priority = PRIORITY.NORMAL
    complete = false

    constructor(name ='default name', priority=ACTIONS.NORMAL){
        this.id = new Date()
        name === "" ? this.name = 'default name': this.name = name  
        this.priority = priority
        this.complete = false 
    }

}