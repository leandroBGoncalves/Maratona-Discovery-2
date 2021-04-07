let data = [
    {
        id: 1,
        name: "Pizzaria do Leandro",
        "daily-hours": 3,
        "total-hours": 2,
        created_at: Date.now(),
    },
    {
        id: 2,
        name: "OneTwo Projects",
        "daily-hours": 3,
        "total-hours": 25,
        created_at: Date.now(),

    }
];

module.exports = {
    get(){
        return data
    },
    update(newJob){
        data = newJob
    },
    delete(id){
        data = data.filter(job => Number(job.id) !== Number(id))
    }
}