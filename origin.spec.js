describe('test krPostposition library', () => {
  it('attach() function\'s original type', () => {
    expect(krPostposition.attach('돌고래', '과')).toBe('돌고래와')
    expect(krPostposition.attach('사슴', '는')).toBe('사슴은')
    expect(krPostposition.attach('고양이', '이')).toBe('고양이가')
    expect(krPostposition.attach('모니터', '이었')).toBe('모니터였')
  })

  it('attach() function\'s custom type', () => {
    expect(krPostposition.attach('사랑', '이야말로')).toBe('사랑이야말로')
    expect(krPostposition.attach('마음', '라도')).toBe('마음이라도')
    expect(krPostposition.attach('고기', '이나마')).toBe('고기나마')
  })
})