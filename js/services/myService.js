// setup our service
app.factory('myService', function($http) {

    return {

        // get all the contacts
        get : function() {
            return $http.get('/api/index');
        },

        // save a contact (pass in form data)
        save : function(formData) {
            return $http({
                method: 'POST',
                url: '/api/...',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(formData)
            });
        },

        // destroy a contact
        destroy : function(id) {
            return $http.delete('/api/contacts/' + id);
        }
    };

});
