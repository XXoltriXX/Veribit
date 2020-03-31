import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/apps/appsModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';

const { fields } = model;

class AppsForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.novi,
    fields.levo,
    fields.nosco,
    fields.scio,
    fields.disco,
    fields.indicium,
    fields.specto,
    fields.intelligo,
    fields.teneo,
    fields.percipio,
    fields.antikythera,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <InputFormItem
                  name={fields.novi.name}
                  label={fields.novi.label}
                  required={fields.novi.required}
                  autoFocus
                />
                <InputFormItem
                  name={fields.levo.name}
                  label={fields.levo.label}
                  required={fields.levo.required}
                />
                <InputFormItem
                  name={fields.nosco.name}
                  label={fields.nosco.label}
                  required={fields.nosco.required}
                />
                <InputFormItem
                  name={fields.scio.name}
                  label={fields.scio.label}
                  required={fields.scio.required}
                />
                <InputFormItem
                  name={fields.disco.name}
                  label={fields.disco.label}
                  required={fields.disco.required}
                />
                <InputFormItem
                  name={fields.indicium.name}
                  label={fields.indicium.label}
                  required={fields.indicium.required}
                />
                <InputFormItem
                  name={fields.specto.name}
                  label={fields.specto.label}
                  required={fields.specto.required}
                />
                <InputFormItem
                  name={fields.intelligo.name}
                  label={fields.intelligo.label}
                  required={fields.intelligo.required}
                />
                <InputFormItem
                  name={fields.teneo.name}
                  label={fields.teneo.label}
                  required={fields.teneo.required}
                />
                <InputFormItem
                  name={fields.percipio.name}
                  label={fields.percipio.label}
                  required={fields.percipio.required}
                />
                <InputFormItem
                  name={fields.antikythera.name}
                  label={fields.antikythera.label}
                  required={fields.antikythera.required}
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    onClick={form.handleSubmit}
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>

                  {this.props.onCancel ? (
                    <Button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      icon="close"
                    >
                      {i18n('common.cancel')}
                    </Button>
                  ) : null}
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default AppsForm;
