import { createSelector } from "@reduxjs/toolkit";

export const selectTeachers = (state) => state.teachers.teachers;

export const selectShowDetails = (teacherId) =>
  createSelector(
    (state) => state.teachers.showDetails,
    (showDetails) => showDetails[teacherId] || false
  );

export const selectLastKey = (state) => state.teachers.lastKey;

export const selectLoading = (state) => state.teachers.loading;

export const selectLoadMore = (state) => state.teachers.loadMore;
