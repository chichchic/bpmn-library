import BpmnJs from 'bpmn-js';
import bpmnModdle from 'bpmn-moddle'
import pizza from './resource/pizza-collaboration.bpmn'

async function makeBpmn(xml) {
  try {
    const viewer = new BpmnJs({ container: '#canvas' });
    const { warnings } = await viewer.importXML(xml)
    const eventBus = viewer.get('eventBus');
    const events = [
      'element.hover',
      'element.out',
      'element.click',
      'element.dbclick',
      'element.mousedown',
      'element.mouseup',
    ]
    events.forEach(function (event) {
      eventBus.on(event, function (e) {
        console.log(event, e.element.businessObject.name)
      })
    })
    const endEventNode = document.querySelector('#canvas [data-element-id=END_EVENT]');
    console.log(endEventNode)
    endEventNode.addEventListener('click', () => {
      alert('clicked the end event');
    })
  } catch (err) {
    const { warnings, message } = err;
    console.log('something went wrong:', warnings, message);
  }
}

function run() {
  makeBpmn(pizza)
}
run()


