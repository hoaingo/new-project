import mainStore from './../../../src/MainStore'
import React from 'react'

export default class CalendarComponent {
    static createChart = (reportStudent, reportTeacher, monthRevenue) => {
        const revenueId = "#" + mainStore.monthRevenueElemenetId;
        const studentId = "#" + mainStore.reportStudentElemenetId;
        const teacherId = "#" + mainStore.reportTeacherElemenetId;

        if ($(revenueId).length != 0 || $(studentId).length != 0 || $(teacherId).length != 0) {
            /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

            var student = {
                labels: !!reportStudent ? reportStudent.map(item => {
                    return item.month
                }) : [],
                series: [
                    !!reportStudent ? reportStudent.map(item => {
                        return item.total
                    }) : []
                ]
            };

            var optionsStudent = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                low: 0,
                high: !!student.series[0].length != 0 ? Math.max(...student.series[0]) + (Math.max(...student.series[0]) / 10) : 0,
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            }

            var teacher = {
                labels: !!reportTeacher ? reportTeacher.map(item => {
                    return item.month
                }) : [],
                series: [
                    !!reportTeacher ? reportTeacher.map(item => {
                        return item.total
                    }) : []
                ]
            };

            var optionsTeacher = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                low: 0,
                high: !!teacher.series[0].length != 0 ? Math.max(...teacher.series[0]) + (Math.max(...teacher.series[0]) / 10) : 0,
                // high: 100,
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            }

            var revenue = {
                labels: !!monthRevenue ? monthRevenue.map(item => {
                    return item.month
                }) : [],
                series: [
                    !!monthRevenue ? monthRevenue.map(item => {
                        return item.total
                    }) : []
                ]
            };

            var optionsRevenue = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                low: 0,
                high: !!revenue.series[0].length != 0 ? Math.max(...revenue.series[0]) + (Math.max(...revenue.series[0]) / 10) : 0,
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            }

            if (revenue.series[0].length != 0 && student.series[0].length != 0 && teacher.series[0].length != 0) {
                var chartStudent = new Chartist.Line(studentId, student, optionsStudent);
                var chartTeacher = new Chartist.Line(teacherId, teacher, optionsTeacher);
                var chartMonth = new Chartist.Bar(revenueId, revenue, optionsRevenue);
            }
        }
    }
}
