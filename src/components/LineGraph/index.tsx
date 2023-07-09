import React, {createRef} from 'react';
import * as d3 from 'd3';

import {Item, Props} from './types';
import styles from './.module.css';

class LineGraph extends React.PureComponent<Props> {
  ref: React.RefObject<HTMLDivElement>;
  svg: d3.Selection<SVGSVGElement, undefined, null, undefined>;
  container: d3.Selection<SVGGElement, undefined, null, undefined>;
  xLine: d3.ScaleTime<number, number, never>;
  yLine: d3.ScaleLinear<number, number, never>;
  line: d3.Area<Item>;
  gradient: d3.Selection<SVGLinearGradientElement, undefined, null, undefined>;

  private SVG_WIDTH: number;
  private SVG_HEIGHT: number;

  private GRAPH_WIDTH: number;
  private GRAPH_HEIGHT: number;

  private CENTER_X: number;
  private CENTER_Y: number;

  constructor(props: Props) {
    super(props);
    this.ref = createRef<HTMLDivElement>();
  }

  componentDidMount(): void {
    const {width, height, colors} = this.props;
    const {clientWidth, clientHeight} = this.ref.current;

    this.SVG_WIDTH = clientWidth || width;
    this.SVG_HEIGHT = clientHeight || height;

    this.GRAPH_WIDTH = this.SVG_WIDTH * 0.8;
    this.GRAPH_HEIGHT = this.SVG_HEIGHT * 0.8;

    this.CENTER_X = (this.SVG_WIDTH - this.GRAPH_WIDTH) / 2;
    this.CENTER_Y =
      (this.SVG_HEIGHT - this.GRAPH_HEIGHT) / 2 + this.GRAPH_HEIGHT;

    this.drawSvg();
    this.drawScale();
    this.gradientColor(colors);
    this.drawLine();
  }

  componentDidUpdate(): void {
    const {data, colors} = this.props;

    this.updateLine(data, colors);
  }

  private drawSvg() {
    const {ref, CENTER_X, CENTER_Y, SVG_WIDTH, SVG_HEIGHT} = this;

    this.svg = d3
      .create('svg')
      .attr('width', SVG_WIDTH)
      .attr('height', SVG_HEIGHT);

    this.container = this.svg
      .append('g')
      .attr('transform', `translate(${CENTER_X}, ${CENTER_Y})`);

    ref.current.appendChild(this.svg.node());
  }

  private drawScale() {
    const {GRAPH_WIDTH, GRAPH_HEIGHT} = this;
    const {data} = this.props;

    this.xLine = d3
      .scaleTime([0, GRAPH_WIDTH])
      .domain(d3.extent(data, (d) => d.date));

    this.yLine = d3.scaleLinear([0, -GRAPH_HEIGHT]).domain([0, 100]);
    // .domain([0, d3.max(data, (d) => d.value)]);
  }

  private drawLine() {
    const {data} = this.props;
    const {container, yLine, xLine} = this;

    this.line = d3
      .area<Item>()
      .x((d) => xLine(d.date))
      .y0(yLine(0))
      .y1((d) => yLine(d.value))
      .curve(d3.curveBasis);

    container
      .append('g')
      .call(d3.axisBottom(xLine).tickFormat(d3.timeFormat('%Y')));
    // container.append('g').call(d3.axisLeft(y));

    container
      .datum(data)
      .append('path')
      .attr('id', 'first-path')
      .attr('fill', 'url(#gradient-color)')
      .attr('d', this.line);
  }

  private gradientColor(colors: Array<string>) {
    this.svg.select('defs').remove();
    this.gradient = this.svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'gradient-color')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%');

    colors.forEach((color, key) => {
      const offset = 100 * key;
      this.gradient
        .append('stop')
        .attr('offset', offset)
        .style('stop-color', color)
        .style('stop-opacity', 1);
    });
  }

  private updateLine(data: Array<Item>, colors: Array<string>) {
    const {line, container} = this;

    this.gradientColor(colors);

    container
      .select('#first-path')
      .datum(data)
      .transition()
      .duration(1000)
      .attr('d', (d) => line(d));
  }

  render(): React.ReactNode {
    const {ref} = this;
    const {className, style} = this.props;

    let lineGraphStyle = styles['line-graph'];
    if (className) lineGraphStyle += ` ${className}`;

    return <div className={lineGraphStyle} style={style} ref={ref}></div>;
  }
}

export default LineGraph;
