describe('test krPostposition library', function () {
  it('.attach() function', function () {
    expect(krPostposition.attach('돌고래', '과')).toBe('돌고래와')
    expect(krPostposition.attach('사슴', '는')).toBe('사슴은')
    expect(krPostposition.attach('고양이', '이')).toBe('고양이가')
  })
})