var N = null;var sourcesIndex = {};
sourcesIndex["ra_arena"] = {"name":"","files":["lib.rs","map.rs"]};
sourcesIndex["ra_assists"] = {"name":"","dirs":[{"name":"handlers","files":["add_custom_impl.rs","add_derive.rs","add_explicit_type.rs","add_impl.rs","add_missing_impl_members.rs","add_new.rs","apply_demorgan.rs","auto_import.rs","change_visibility.rs","early_return.rs","fill_match_arms.rs","flip_binexpr.rs","flip_comma.rs","flip_trait_bound.rs","inline_local_variable.rs","introduce_variable.rs","invert_if.rs","merge_match_arms.rs","move_bounds.rs","move_guard.rs","raw_string.rs","remove_dbg.rs","remove_mut.rs","replace_if_let_with_match.rs","replace_qualified_name_with_use.rs","split_import.rs"]},{"name":"utils","files":["insert_use.rs"]}],"files":["assist_ctx.rs","ast_transform.rs","lib.rs","marks.rs","utils.rs"]};
sourcesIndex["ra_cargo_watch"] = {"name":"","files":["conv.rs","lib.rs"]};
sourcesIndex["ra_cfg"] = {"name":"","files":["cfg_expr.rs","lib.rs"]};
sourcesIndex["ra_db"] = {"name":"","files":["cancellation.rs","fixture.rs","input.rs","lib.rs"]};
sourcesIndex["ra_fmt"] = {"name":"","files":["lib.rs"]};
sourcesIndex["ra_hir"] = {"name":"","dirs":[{"name":"semantics","files":["source_to_def.rs"]}],"files":["code_model.rs","db.rs","diagnostics.rs","from_id.rs","has_source.rs","lib.rs","semantics.rs","source_analyzer.rs"]};
sourcesIndex["ra_hir_def"] = {"name":"","dirs":[{"name":"body","files":["lower.rs","scope.rs"]},{"name":"nameres","files":["collector.rs","mod_resolution.rs","path_resolution.rs","raw.rs"]},{"name":"path","dirs":[{"name":"lower","files":["lower_use.rs"]}],"files":["lower.rs"]}],"files":["adt.rs","attr.rs","body.rs","builtin_type.rs","child_by_source.rs","data.rs","db.rs","diagnostics.rs","docs.rs","dyn_map.rs","expr.rs","find_path.rs","generics.rs","item_scope.rs","keys.rs","lang_item.rs","lib.rs","nameres.rs","path.rs","per_ns.rs","resolver.rs","src.rs","trace.rs","type_ref.rs","visibility.rs"]};
sourcesIndex["ra_hir_expand"] = {"name":"","files":["ast_id_map.rs","builtin_derive.rs","builtin_macro.rs","db.rs","diagnostics.rs","eager.rs","hygiene.rs","lib.rs","name.rs","quote.rs"]};
sourcesIndex["ra_hir_ty"] = {"name":"","dirs":[{"name":"infer","files":["coerce.rs","expr.rs","pat.rs","path.rs","unify.rs"]},{"name":"traits","files":["builtin.rs","chalk.rs"]}],"files":["autoderef.rs","db.rs","diagnostics.rs","display.rs","expr.rs","infer.rs","lib.rs","lower.rs","marks.rs","method_resolution.rs","op.rs","primitive.rs","traits.rs","utils.rs"]};
sourcesIndex["ra_ide"] = {"name":"","dirs":[{"name":"completion","files":["complete_dot.rs","complete_fn_param.rs","complete_keyword.rs","complete_macro_in_item_position.rs","complete_path.rs","complete_pattern.rs","complete_postfix.rs","complete_record_literal.rs","complete_record_pattern.rs","complete_scope.rs","complete_snippet.rs","complete_trait_impl.rs","completion_context.rs","completion_item.rs","presentation.rs"]},{"name":"display","files":["function_signature.rs","navigation_target.rs","short_label.rs","structure.rs"]},{"name":"references","files":["rename.rs"]},{"name":"syntax_highlighting","files":["html.rs","tags.rs"]}],"files":["assists.rs","call_hierarchy.rs","call_info.rs","completion.rs","diagnostics.rs","display.rs","expand_macro.rs","extend_selection.rs","folding_ranges.rs","goto_definition.rs","goto_type_definition.rs","hover.rs","impls.rs","inlay_hints.rs","join_lines.rs","lib.rs","matching_brace.rs","mock_analysis.rs","parent_module.rs","prime_caches.rs","references.rs","runnables.rs","source_change.rs","ssr.rs","status.rs","syntax_highlighting.rs","syntax_tree.rs","typing.rs"]};
sourcesIndex["ra_ide_db"] = {"name":"","files":["change.rs","defs.rs","feature_flags.rs","imports_locator.rs","lib.rs","line_index.rs","line_index_utils.rs","marks.rs","search.rs","symbol_index.rs","wasm_shims.rs"]};
sourcesIndex["ra_mbe"] = {"name":"","dirs":[{"name":"mbe_expander","files":["matcher.rs","transcriber.rs"]}],"files":["lib.rs","mbe_expander.rs","parser.rs","subtree_source.rs","syntax_bridge.rs","tt_iter.rs"]};
sourcesIndex["ra_parser"] = {"name":"","dirs":[{"name":"grammar","dirs":[{"name":"expressions","files":["atom.rs"]},{"name":"items","files":["adt.rs","consts.rs","traits.rs","use_item.rs"]}],"files":["attributes.rs","expressions.rs","items.rs","params.rs","paths.rs","patterns.rs","type_args.rs","type_params.rs","types.rs"]},{"name":"syntax_kind","files":["generated.rs"]}],"files":["event.rs","grammar.rs","lib.rs","parser.rs","syntax_kind.rs","token_set.rs"]};
sourcesIndex["ra_prof"] = {"name":"","files":["lib.rs","memory_usage.rs"]};
sourcesIndex["ra_project_model"] = {"name":"","files":["cargo_workspace.rs","json_project.rs","lib.rs","sysroot.rs"]};
sourcesIndex["ra_syntax"] = {"name":"","dirs":[{"name":"ast","files":["edit.rs","expr_extensions.rs","extensions.rs","generated.rs","make.rs","tokens.rs","traits.rs"]},{"name":"parsing","files":["lexer.rs","reparsing.rs","text_token_source.rs","text_tree_sink.rs"]},{"name":"validation","files":["block.rs"]}],"files":["algo.rs","ast.rs","fuzz.rs","lib.rs","parsing.rs","ptr.rs","syntax_error.rs","syntax_node.rs","validation.rs"]};
sourcesIndex["ra_text_edit"] = {"name":"","files":["lib.rs","text_edit.rs"]};
sourcesIndex["ra_tt"] = {"name":"","files":["buffer.rs","lib.rs"]};
sourcesIndex["rust_analyzer"] = {"name":"","dirs":[{"name":"cli","files":["analysis_bench.rs","analysis_stats.rs","load_cargo.rs","progress_report.rs"]},{"name":"main_loop","files":["handlers.rs","pending_requests.rs","subscriptions.rs"]}],"files":["caps.rs","cargo_target_spec.rs","cli.rs","config.rs","conv.rs","diagnostics.rs","lib.rs","main_loop.rs","markdown.rs","req.rs","semantic_tokens.rs","vfs_glob.rs","world.rs"]};
sourcesIndex["test_utils"] = {"name":"","files":["lib.rs","marks.rs"]};
sourcesIndex["xtask"] = {"name":"","dirs":[{"name":"codegen","files":["gen_assists_docs.rs","gen_parser_tests.rs","gen_syntax.rs"]}],"files":["ast_src.rs","codegen.rs","dist.rs","install.rs","lib.rs","not_bash.rs","pre_commit.rs"]};
createSourceSidebar();
