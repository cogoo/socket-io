import { TestWindow } from '@stencil/core/testing';
import { SocketIo } from './socket-io';

describe('socket-io', () => {
  it('should build', () => {
    expect(new SocketIo()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSocketIoElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SocketIo],
        html: '<socket-io></socket-io>',
      });
    });
  });
});
