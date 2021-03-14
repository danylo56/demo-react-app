import ProfileStatus from "./ProfileStatus";
import TestRenderer from 'react-test-renderer';

describe('ProfileStatus component', () => {
   test('Status from props should be in the state', () => {
       const component = TestRenderer.create(<ProfileStatus status={"Hello"}/>);
       const instance = component.getInstance();
       expect(instance.state.status).toBe("Hello")
   });
   test('After creation <span> should be displayed', () => {
       const component = TestRenderer.create(<ProfileStatus status={"Hello"}/>);
       const root = component.root;
       let span = root.findByType('span');
       expect(span).not.toBeNull();
   });
   test('After creation <input> shouldn\'t be displayed', () => {
       const component = TestRenderer.create(<ProfileStatus status={"Hello"}/>);
       const root = component.root;
       expect(() => root.findByType("input")).toThrow();
   });
   test('After creation span should contain correct status', () => {
       const component = TestRenderer.create(<ProfileStatus status={"Hello"}/>);
       const root = component.root;
       let span = root.findByType('span');
       expect(span.children[0]).toBe("Hello");
   });
   test('<input> should be displayed in editMode instead of <span>', () => {
       const component = TestRenderer.create(<ProfileStatus status={"Hello"}/>);
       const root = component.root;
       let span = root.findByType('span');
       span.props.onDoubleClick()
       let input = root.findByType('input');
       expect(input.props.value).toBe("Hello");
   });
   test('Callback should be called', () => {
       const mockCallback = jest.fn();
       const component = TestRenderer.create(<ProfileStatus status={"Hello"} updateStatus={mockCallback}/>);
       const instance = component.getInstance();
       instance.deactivateEditMode();
       expect(mockCallback.mock.calls.length).toBe(1);
   });


});