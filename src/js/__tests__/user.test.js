function getHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  } else if (character.health >= 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
}
module.exports = getHealthStatus;

describe('getHealthStatus', () => {
  it('должна вернуть "healthy", если здоровье больше 50', () => {
    const character = { name: 'Маг', health: 90 };
    const result = getHealthStatus(character);
    expect(result).toBe('healthy');
  });

  it('должна вернуть "wounded", если здоровье от 50 до 15', () => {
    const character = { name: 'Маг', health: 30 };
    const result = getHealthStatus(character);
    expect(result).toBe('wounded');
  });

  it('должна вернуть "critical", если здоровье меньше 15', () => {
    const character = { name: 'Маг', health: 10 };
    const result = getHealthStatus(character);
    expect(result).toBe('critical');
  });
});
