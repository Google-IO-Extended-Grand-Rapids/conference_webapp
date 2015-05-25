angular.module('io2015').controller('ScheduleCtrl', function($scope, Io2015ScheduleApi){
    var self = this;

    self.sessions = { 'day1': [], 'day2': [] };

    Io2015ScheduleApi.getConferenceSessions().then(function (data) {
        data.sort(function (a, b) {
            return a.startDttm < b.startDttm ? -1 : 1;
        });

        // TODO: Determine which sessions' time to show

        self.sessions.day1 = data.filter(function (session) {
            return session.startDttm < new Date('05/29/2015');
        });

        self.sessions.day2 = data.filter(function (session) {
            return session.startDttm > new Date('05/29/2015');
        });
    });

    // TODO: Implement function shouldHideTime(sessionId)

});
