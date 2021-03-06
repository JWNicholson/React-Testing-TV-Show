import React from 'react';
import mockAxios from 'axios';
import { mockShowData } from './mockShowData';
import { fetchShow as mockFetchShow } from './api/fetchShow'; 

jest.mock("axios");

test("gets and renders show data", async() => {
    mockAxios.get.mockImplementation(() =>
        Promise.resolve({
            data: {
                id: 2993,
                name: "Stranger Things"
            }
        })
    );

    await mockFetchShow();
    // console.log(mockShowData.id, mockShowData.name);
    expect(mockShowData.id).toEqual(2993);
    expect(mockShowData.name).toEqual("Stranger Things");
});

