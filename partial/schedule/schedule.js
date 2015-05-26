angular.module('io2015').controller('ScheduleCtrl', function($scope, Io2015ScheduleApi){
    var self = this,
        toggledSessions = {},
        timeSuppressedSessions = {};

    self.sessions = { 'day1': [], 'day2': [] };

    self.toggleSession = function toggleSession(sessionId) {
        toggledSessions[sessionId] = !toggledSessions[sessionId];
    };

    self.isSessionExpanded = function isSessionExpanded(sessionId) {
        return !!toggledSessions[sessionId];
    };

    self.isTimeSuppressed = function isTimeSuppressed(sessionId) {
        return !!timeSuppressedSessions[sessionId];
    };

    Io2015ScheduleApi.getConferenceSessions().then(function (data) {
        data.sort(function (a, b) {
            if (a.startDttm < b.startDttm) {
                return -1;
            }
            else if (a.startDttm > b.startDttm) {
                return 1;
            }

            // Prioritize live sessions as opposed to streamed
            // 1: CodeLab
            // 2: Streaming ** De-prioritized
            // 3: OnSite
            var weightedConfType = function (type) {
                return type === 2 ? type * -1 : type;
            };
            var weightedA = weightedConfType(a.conferenceSessionType.id),
                weightedB = weightedConfType(b.conferenceSessionType.id);

            return weightedB - weightedA;
        });

        self.sessions.day1 = data.filter(function (session) {
            return session.startDttm < new Date('05/29/2015');
        });

        self.sessions.day2 = data.filter(function (session) {
            return session.startDttm > new Date('05/29/2015');
        });

        var usedTimes = {};
        data.forEach(function (session, index) {
            if (usedTimes[session.startDttm]) {
                timeSuppressedSessions[session.id] = true;
            } else {
                usedTimes[session.startDttm] = true;
            }
        });
    });

});
