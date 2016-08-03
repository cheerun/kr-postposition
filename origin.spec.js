describe('test krPostposition library', () => {
  it('merge() function\'s original type', () => {
    expect(krPostposition.merge('돌고래', '과')).toBe('돌고래와')
    expect(krPostposition.merge('사슴', '는')).toBe('사슴은')
    expect(krPostposition.merge('고양이', '이')).toBe('고양이가')
    expect(krPostposition.merge('모니터', '이었')).toBe('모니터였')
  })

  it('merge() function\'s custom type', () => {
    expect(krPostposition.merge('사랑', '이야말로')).toBe('사랑이야말로')
    expect(krPostposition.merge('마음', '라도')).toBe('마음이라도')
    expect(krPostposition.merge('고기', '이나마')).toBe('고기나마')
  })
  
  it('only parse() function test', () => {
    expect(krPostposition.parse('철수{이야}, 그는 나{와}의 약속{를} 지키기 위해 돌고래{을} 바다에 풀어준 착한 인간{였}어.'))
      .toBe('철수야, 그는 나와의 약속을 지키기 위해 돌고래를 바다에 풀어준 착한 인간이었어.')

    expect(krPostposition.parse('돌고래{은} 이마의 구멍{로} 숨{를} 쉬는 것{여}서, 종종 물 밖{로} 나와야 한다.'))
      .toBe('돌고래는 이마의 구멍으로 숨을 쉬는 것이어서, 종종 물 밖으로 나와야 한다.')
  })

  it('parse() function test with changing symbols', () => {
    krPostposition.setSymbol('#', ']')
    expect(krPostposition.parse('철수#이야], 그는 나#과]의 약속#를] 지키기 위해 돌고래#을] 바다에 풀어준 착한 인간#였]어.'))
      .toBe('철수야, 그는 나와의 약속을 지키기 위해 돌고래를 바다에 풀어준 착한 인간이었어.')

    krPostposition.setOpenSymbol('^')
    krPostposition.setCloseSymbol('*')
    expect(krPostposition.parse('철수^이야*, 그는 나^과*의 약속^를* 지키기 위해 돌고래^을* 바다에 풀어준 착한 인간^였*어.'))
      .toBe('철수야, 그는 나와의 약속을 지키기 위해 돌고래를 바다에 풀어준 착한 인간이었어.')

    krPostposition.setSymbol('{', '}')
    expect(krPostposition.parse('철수{이야}, 그는 나{와}의 약속{를} 지키기 위해 돌고래{을} 바다에 풀어준 착한 인간{였}어.'))
      .toBe('철수야, 그는 나와의 약속을 지키기 위해 돌고래를 바다에 풀어준 착한 인간이었어.')
  })

  it('empty setSymbol() test', () => {
    krPostposition.setOpenSymbol('&')
    krPostposition.setCloseSymbol('$')
    krPostposition.setSymbol()
    expect(krPostposition.parse('철수{이야}, 그는 나{와}의 약속{를} 지키기 위해 돌고래{을} 바다에 풀어준 착한 인간{였}어.'))
      .toBe('철수야, 그는 나와의 약속을 지키기 위해 돌고래를 바다에 풀어준 착한 인간이었어.')
  })
})