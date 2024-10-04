import { createSelector } from "@reduxjs/toolkit";

export const selectTeachers = (state) => state.teachers.teachers;

export const selectShowDetails = (teacherId) =>
  createSelector(
    (state) => state.teachers.showDetails,
    (showDetails) => showDetails[teacherId] || false
  );
