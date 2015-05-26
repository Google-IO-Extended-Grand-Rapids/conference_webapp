angular.module('io2015')

    .factory('Io2015ScheduleApi', ['$http', '$q', function ($http, $q) {

        function apiCall() {
            var apiBaseUrl = 'http://104.236.204.59:8081/api',
                operation = Array.prototype.slice.call(arguments).join('');
            return $http.get( apiBaseUrl + operation );
        }

        function returnData(response) {
            return response.data;
        }

        function failWithMsg(msg) {
            return function () { throw msg; };
        }

        /*
        function fixConferenceSessionDates(response) {
            var data = response.data;
            for (var i = 0; i < data.length; i++) {
                // Good ol' Java server having a different timezone than your data...
                // Adjust for Pacific Time
                var date = new Date(data[i].startDttm);
                data[i].startDttm = date.setHours(date.getHours() + 4);
            }
            return data;
        }
        */

        function getConferenceSessionData() {
            return apiCall('/conference/1/conferenceSessions')
                .then( returnData )
                .catch( failWithMsg("Failure retrieving conference session data") );
        }

        function getPresenterData(presenterIds) {
            var presenterData = presenterIds.reduce(function (presentersMap, id) {
                presentersMap[id] = apiCall('/presenter/', id).then( returnData );
                return presentersMap;
            }, {});
            return $q.all( presenterData ).catch( failWithMsg("Failed to retrieve presenter data") );
        }

        function getRoomData(rooms) {
            var roomData = rooms.reduce(function (roomsMap, id) {
                roomsMap[id] = apiCall('/room/', id).then( returnData );
                return roomsMap;
            }, {});
            return $q.all( roomData ).catch( failWithMsg("Failed to retrieve room data") );
        }

        function lookupConferenceRooms(conferences) {
            return $q.when(
                conferences.reduce(function (roomIds, conf) {
                    var id = conf.roomId;
                    if (roomIds.indexOf(id) === -1) {
                        roomIds.push(id);
                    }
                    return roomIds;
                }, []))
                .then( getRoomData );
        }

        function lookupConferencePresenters(conferences) {
            return $q.when(
                conferences.reduce(function (presenterIds, conf) {
                    var id, i = conf.presenterIds.length;
                    while (i--) {
                        id = conf.presenterIds[i];
                        if (presenterIds.indexOf(id) === -1) {
                            presenterIds.push(id);
                        }
                    }
                    return presenterIds;
                }, []))
                .then( getPresenterData );
        }

        function hydrateConferenceData(conferences, lookedUpData) {
            conferences.forEach(function (conf) {
                conf.room = lookedUpData.rooms[conf.roomId];
                conf.presenters = [];
                conf.presenterIds.forEach(function (id) {
                    conf.presenters.push(lookedUpData.presenters[id]);
                });
            });
            return conferences;
        }

        function getConferenceSessions() {
            return getConferenceSessionData().then(function (conferences) {
                var dataToLookUp = {
                    presenters: lookupConferencePresenters(conferences),
                    rooms: lookupConferenceRooms(conferences)
                };
                return $q.all(dataToLookUp)
                    .then(function (lookedUpData) {
                        return hydrateConferenceData(conferences, lookedUpData);
                    })
                    .catch( failWithMsg("Failed to put together conference data"));
            });
        }


        //===============================================


        return {
            'getConferenceSessions': getConferenceSessions
        };

    }]);
