const validate = (activity) => {
    let errors = {};
    if(!activity.name.trim()) {
        errors.name = 'Name is required*'
    };
    if(activity.difficulty > 5 || activity.difficulty < 1){
        errors.difficulty = 'Maximum difficulty from 1 to 5*'
    };
    if(activity.duration > 24 || activity.duration < 1 ){
        errors.duration = 'Maximum duration from 1 to 24 hours*'
    };
    if(!activity.season){
        errors.season = 'Select a season*'
    };
    if(!activity.countries.length){
        errors.countries = 'Select a country*'
    };

    return errors;
};


export default validate;