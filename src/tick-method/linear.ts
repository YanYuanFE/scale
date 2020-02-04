import { ScaleConfig } from '../types';
import extended from '../util/extended';
import interval from '../util/interval';


/**
 * 计算线性的 ticks，使用 wilkinson extended 方法
 * @param cfg 度量的配置项
 * @returns 计算后的 ticks
 */
export default function linear(cfg: ScaleConfig): number[] {
  const { min, max, tickCount, nice, tickInterval } = cfg;
  if (tickInterval) {
    return interval(min, max, tickInterval).ticks;
  }
  return extended(min, max, tickCount, nice).ticks;
}