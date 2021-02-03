describe('es2021', () => {
  describe('Logic Assignment Operators', () => {
    describe('||=', () => {
      it('x empty assign y', () => {
        let x = 0
        x ||= 12;
        expect(x).toBe(12);
      })

    });
  });
});
