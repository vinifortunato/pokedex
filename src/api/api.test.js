import MockAdapter from 'axios-mock-adapter';
import api from './api';

describe('api', () => {
  it('should request get correctly', async () => {
    const mockUrl = 'https://api.test.com/test';
    const mockAdapter = new MockAdapter(api.instance);
    const mockResponse = {
      test: true,
    };
    const expectedResponse = mockResponse;
    mockAdapter.onGet(mockUrl).reply(200, mockResponse);
    const response = await api.get(mockUrl);
    expect(response.data).toMatchObject(expectedResponse);
  });

  it('should request get and return null when error', async () => {
    const mockUrl = 'https://api.test.com/test';
    const mockAdapter = new MockAdapter(api.instance);
    mockAdapter.onGet(mockUrl).reply(404);
    const response = await api.get(mockUrl);
    expect(response).toBe(null);
  });

  it('should request getAll correctly', async () => {
    const mockUrl1 = 'https://api.test.com/test1';
    const mockUrl2 = 'https://api.test.com/test2';
    const mockAdapter = new MockAdapter(api.instance);
    const mockResponse = {
      test: true,
    };
    const expectedResponse = [mockResponse, mockResponse];
    mockAdapter.onGet(mockUrl1).reply(200, mockResponse);
    mockAdapter.onGet(mockUrl2).reply(200, mockResponse);
    const allResponses = await api.getAll([mockUrl1, mockUrl2]);
    const responsesMap = allResponses.map((element) => element.data);
    expect(responsesMap).toMatchObject(expectedResponse);
  });
});
